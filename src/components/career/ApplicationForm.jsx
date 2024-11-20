import {useRef, useState} from 'react';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {AlertCircle, CloudUpload, ScanEye, X} from 'lucide-react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Alert, AlertTitle} from "@/components/ui/alert";
import toast from "react-hot-toast";
import axios from "axios";
import ReactiveButton from "reactive-button";


// Define the form schema using zod
const formSchema = z.object({
  fullName: z.string().min(3, {message: "Full name must be at least 3 characters."}),
  email: z.string().email({message: "Invalid email address."}),
  phoneNumber: z
    .string()
    .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, {message: "Phone number must be +8801XXXXXXXXX or 01XXXXXXXXX (11 digits)."}),
  position: z.string().min(3, {message: "Position for applying is required."}),
  workExperience: z.string().optional(),
  expectedSalary: z.string().min(1, {message: "Expected salary is required."}),
  resume: z
    .any()
    .refine((file) => file?.size <= 8 * 1024 * 1024, "File size must be less than or equal to 8MB.")
    .refine((file) => ['application/pdf'].includes(file?.type), "Only PDF files are allowed."),
});

// eslint-disable-next-line react/prop-types
const ApplicationForm = ({position}) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [error, setError] = useState(null); // Add error state
  const [buttonState, setButtonState] = useState('idle');
  const fileInputRef = useRef(null);
  const handleFileChange = (file) => {
    if (file && file.type === "application/pdf") {
      setError(null);
      setPdfFile(file);
    } else {
      setPdfFile(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = null; // Reset the file input
      }
      setError("Upload a PDF file to preview");
    }
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "+880",
      position: position,
      workExperience: "",
      expectedSalary: "",
      resume: null,
    }
  });

  // Define a submit handler
  const onSubmit = async (values) => {
    setButtonState('loading');

    // Function to convert file to base64
    /*const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    // Convert the resume file to base64
    let resumeBase64 = '';
    if (values.resume) {
      try {
        resumeBase64 = await toBase64(values.resume);
      } catch (error) {
        console.error('Error converting file to base64:', error);
        setButtonState('error');
        toast.error("Failed to convert file.");
        return;
      }
    }*/
    // https://web-api.nexdecade.com/api/send-application
    console.log(values.resume)
    // Send data as JSON
      const data = {
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          position: values.position,
          workExperience: values.workExperience,
          expectedSalary: values.expectedSalary,
          resume: values.resume,
      }
    try {
      const response = await axios.post("https://web-api.nexdecade.com/api/send-application", data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Send as JSON
        },
      });

      if (response.status === 200) {
        setButtonState('success');
        toast.success(response.data.message);
        setTimeout(() => {
          toast.custom((t) => (
            <div className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start justify-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <img src={"/images/opengraph-image.jpg"} alt={"logo"} width={1200} height={630}
                           className={"w-10 h-10 object-center rounded-full border-2 border-primary shadow-lg"}/>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Thank you for applying at Nexdecade Technology Private Ltd.
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
          ));
        }, 3000);
        form.reset();
        setPdfFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = null; // Manually reset the file input
        }
      } else {
        setButtonState('error');
          setPdfFile(null);
          if (fileInputRef.current) {
              fileInputRef.current.value = null; // Reset the file input
          }
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setButtonState('error');
      toast.error("Failed to submit the application.");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#F2F2F2] rounded-xl xl:px-[92px] xl:py-[60px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-[40px] leading-[47px]">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Full Name <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="!bg-white InputField"
                      placeholder="Enter Full Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email Address <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="!bg-white InputField"
                      placeholder="Enter E-mail Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="!bg-white InputField"
                      type="text"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {/* Position for Applying */}
            <FormField
              control={form.control}
              name="position"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Position for Applying <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <Input
                      className="!bg-white InputField"
                      placeholder="Enter Position"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          {/* Work Experience */}
          <FormField
            control={form.control}
            name="workExperience"
            render={({field}) => (
              <FormItem>
                <FormLabel>What is your past work experience? (If Any)</FormLabel>
                <FormControl>
                  <Textarea
                    className="!bg-white InputField"
                    placeholder="Briefly share about companies you worked for and projects you worked on"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Expected Salary */}
            <FormField
              control={form.control}
              name="expectedSalary"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Expected Salary <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <Input
                      type={"number"}
                      className="!bg-white InputField"
                      placeholder="Amount in Taka"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            {/* Upload Resume */}
            <FormField
              control={form.control}
              name="resume"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Upload Your Resume <span className="text-red-600">*</span></FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        ref={fileInputRef}
                        className="!bg-white InputField hover:border-primary hover:cursor-pointer"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          field.onChange(e.target.files[0]);
                          handleFileChange(e.target.files[0]); // handle file preview
                        }}
                        style={{paddingRight: '40px'}} // To make space for the upload icon
                      />
                      {/* End icon for upload */}
                      <div className="absolute top-0 right-0 p-2">
                        <CloudUpload
                          className="text-gray-500"
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>File types allowed: pdf - Max file size: 8MB</FormDescription>
                  <FormMessage/>
                  {/* Render the error alert if there is an error */}
                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4"/>
                      <AlertTitle>{error}</AlertTitle>
                    </Alert>
                  )}
                  {/* Show preview if PDF is uploaded */}
                  {pdfFile && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">Uploaded File: {pdfFile.name}</p>
                      <Dialog className={"!bg-white"}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="mt-2 bg-white hover:bg-gradient-default">
                            <ScanEye className="mr-2"/>
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white md:max-w-6xl md:min-h-[calc(100vh_-_150px)]">
                          <DialogHeader>
                            <DialogTitle>PDF Preview</DialogTitle>
                          </DialogHeader>
                          <iframe
                            src={URL.createObjectURL(pdfFile)}
                            width="100%"
                            height="450px"
                            title="PDF Preview"
                            frameBorder="0"
                          ></iframe>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="grid items-center justify-start w-full pt-6">
            <ReactiveButton
              buttonState={buttonState} // Use button state
              idleText="Submit Application"
              loadingText="Sending..."
              successText="Application Sent!"
              errorText="Failed to Send"
              rounded={true}
              type="submit"
              className="hover:!mt-0 min-w-[211px] drop-shadow hover:drop-shadow-lg py-1.5 lg:text-xl btn-large-rounded"
              color="primary"
            />
            {/*<button type="submit" className="btn-large-rounded">
                            Submit Application
                        </button>*/}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
