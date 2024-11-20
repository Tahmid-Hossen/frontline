import GridSlider from "@/components/sliders/GridSlider/GridSlider";

const Culture = ({data}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="space-y-3 text-center">
                <h1 className={`heading1 text-center `}>
                    {data?.title || ''} <span className="text-gradiant">{data?.title_highlight || ''}</span>
                </h1>
                <p className="text-center description">{data?.description || ''}</p>
            </div>
            <GridSlider data={data?.cultureData}/>
        </div>
    );
};

export default Culture;