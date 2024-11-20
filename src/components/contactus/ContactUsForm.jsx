import {useState} from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea";
import toast from "react-hot-toast";
import axios from 'axios';
import ReactiveButton from 'reactive-button';
import {X} from 'lucide-react';


// Define the form schema using zod
const formSchema = z.object({
  fullName: z.string().min(3, {message: "Full name must be at least 3 characters."}),
  companyName: z.string().min(3, {message: "Company name is required."}),
  email: z.string().email({message: "Invalid email address."}),
  phoneNumber: z
    .string()
    .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Phone number must be +8801XXXXXXXXX or 01XXXXXXXXX (11 digits)."}),
  message: z.string().min(5, {message: "Message must be at least 5 characters."}),
});

const ContactUsForm = () => {
  const [buttonState, setButtonState] = useState('idle'); // Manage the button state
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "+880",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setButtonState('loading'); // Set the button state to loading

    try {
      const response = await axios.post(`https://web-api.nexdecade.com/api/contact`, values, {
        headers: {'Content-Type': 'application/json'}
      });

      if (response.status === 200) {
        setButtonState('success'); // Set the button state to success
        toast.success(response.data.message);
        setTimeout(() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start justify-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <img src={"/images/opengraph-image.jpg"} alt={"logo"} width={1200} height={630}
                         className={"w-10 h-10 object-center rounded-full border-2 border-primary shadow-lg"}/>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Hi! Thank you for your query .
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      We'll get back to you as soon as possible!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <X/>
                </button>
              </div>
            </div>
          ))
        }, 3000); // Show second toast after the first one disappears
        form.reset();
      } else {
        setButtonState('error'); // Set the button state to error
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setButtonState('error'); // Set the button state to error
      toast.error("Failed to send the message.");
    }
  };

  return (
    <div className="border border-gray-300 bg-white rounded-lg p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="font-bold text-lg">Your Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="InputField"
                      placeholder="Enter Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="InputField"
                      placeholder="Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="InputField"
                      placeholder="Enter E-mail Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="InputField"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <h2 className="font-bold text-lg">Your Queries</h2>
          <FormField
            control={form.control}
            name="message"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="InputField"
                    placeholder="Leave us a message"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center w-full py-3">
            <ReactiveButton
              buttonState={buttonState} // Use button state
              idleText="Submit"
              loadingText="Sending..."
              successText="Message Sent!"
              errorText="Failed to Send"
              rounded={true}
              type="submit"
              className="hover:!mt-0 min-w-[211px] drop-shadow hover:drop-shadow-lg py-1.5 lg:text-xl btn-large-rounded"
              color="primary"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
