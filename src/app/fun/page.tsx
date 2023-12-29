import { LinearGradient, RadialGradient } from 'react-text-gradients'
import * as React from 'react';

export default function fun () {

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