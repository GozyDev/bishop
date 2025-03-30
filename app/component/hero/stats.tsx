// Stats component
export default function Starts({ number, text }: { number: string; text: string }) {
    return (
      <article className="group h-[200px] p-6 md:p-8">
        <div className="space-y-2 flex justify-center flex-col text-center">
          <h3 className="text-5xl md:text-5xl font-bold bg-gradient-to-r bg-amber-500 to-black bg-clip-text text-transparent">
            {number}
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium">{text}</p>
        </div>
      </article>
    );
  }
  
  // Parent section
