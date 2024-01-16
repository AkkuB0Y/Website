import { LinearGradient } from 'react-text-gradients'
import * as React from 'react';

export default function fun () {

    // unused for now, maybe will have some cool stuff in future updates :-D
    return (

        <main className ="text-slate-900 dark:text-slate-50 ease-in-out duration-150">
            
            <center><h1 className="mt-8 text-5xl font-bold">
        
            <LinearGradient gradient = {['to left', 'rgb(253, 183, 45), rgb(84,34,195)']}
            className='text-shadow-lg shadow-indigo-400/20'>Some 
            
            <span className="text-shadow-lg shadow-orange-400/40"> Fun!</span>
            </LinearGradient>

            </h1></center>

            
        </main>
    )
}
/*
            <div className='items-center mt-12'>
                <center>
                    <iframe className="rounded-[12px] w-[50%] object-center" src="https://open.spotify.com/embed/playlist/1M462SRJnI3Y2Olb9C608j?utm_source=generator&theme=0" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </center>
            </div>

*/