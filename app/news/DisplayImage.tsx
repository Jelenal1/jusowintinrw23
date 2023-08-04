export default function DisplayImage({ imageurl }: { imageurl: string }) {
    return (
        <div className="h-96 aspect-square">
            <img src={imageurl} alt="" className="object-cover w-full h-full" />
        </div>
    );
}