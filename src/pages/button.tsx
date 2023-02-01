import Head from "next/head";

function Button() 
{
    return (
        <button className="button relative p-[10px] min-w-[300px] min-h-[60px] text-base font-semibold tracking-[1.3px] text-white uppercase cursor-pointer rounded-xl border-none opacity-80">
            MAKE ME A HERO
        </button>  
    );
}
  
function App() {
    return (
        <>
            <Head>
                <title>Button</title>
                <meta name="description" content="Submit Button Animation" />
                <link rel="stylesheet" href="src/styles/globals.css"/>
            </Head>
            <main className="h-full">
                <div className="button-wrap h-full flex justify-center items-center mt-[150px]">
                    <Button/>
                </div>
            </main>
        </>
    );
}

export default App;
