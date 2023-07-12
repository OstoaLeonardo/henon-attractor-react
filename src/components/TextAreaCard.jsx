import { useEffect } from 'react';
import { saveAs } from 'file-saver';

export function TextAreaCard({ convertedText }) {
    // Ajustar textarea al contenido
    useEffect(() => {
        autosize(document.getElementById("converted-message"));
    }, [convertedText]);
    
    const handleSave = () => {
        // Guardar el texto de converted-message en un archivo txt
        var textAreaOutput = document.getElementById("converted-message").value;
        var blob = new Blob([textAreaOutput], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "output.txt");
    };

    return (
        <div className='relative overflow-x-auto p-8 shadow-md sm:rounded-lg bg-white border border-gray-200 rounded-lg dark:bg-zinc-900 dark:border-zinc-700'>
            <label htmlFor='converted-message' className='block mb-6 text-sm font-medium text-gray-900 dark:text-white'>Output:</label>
            <textarea
                type='text'
                id='converted-message'
                className='autosize-textarea text-area-output font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={convertedText}
                readOnly>
            </textarea>
            <button type='button' id='btn-save' onClick={handleSave} className='w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                Guardar archivo
            </button>
        </div>
    )
}