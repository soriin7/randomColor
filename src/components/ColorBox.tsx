/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import { Configuration, OpenAIApi } from 'openai';
import { motion } from "framer-motion";
import { PaperPlaneTilt } from "phosphor-react";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export function ColorBox() {
  const [isGettingColor, setIsGettingColor] = useState(false);
  const [color, setColor] = useState<string | undefined>('00AFF0');
  const [prompt, setPrompt] = useState<string>('');

  const getColor = async () => {
    try {
      setIsGettingColor(true);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `O código CSS para ${prompt}:\n\nbackground-color: #`,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: [";"],
      });
      setColor(response.data.choices[0]?.text);
      setIsGettingColor(false);
    } catch (error) {
      console.log('I HAVE AN ERROR --> ', error);
    }
  }

  return (
    <>
      <div className="flex h-full w-full justify-center items-center transition" style={{ backgroundColor: `#${color}` }}>
      </div>
      <div className="absolute w-[30rem]">
        <span className="flex m-auto p-4 justify-center font-semibold text-5xl text-white">{`#${color}`}</span>
        <textarea
          className="flex my-5 p-1 w-full justify-center h-24 max-h-52 border rounded-lg resize-none text-black text-xl border-slate-300 hover:border-slate-400 focus:border-teal-500 focus:outline-none"
          style={{ backgroundColor: `white`, opacity: '.8' }}
          onChange={(e) => setPrompt(e.target.value)}>
        </textarea>
        {isGettingColor ?
          <motion.button
            className="flex p-2 m-auto justify-center items-center rounded-md font-semibold text-xl text-white"
            style={{ backgroundColor: `#1D1E22` }}
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            disabled
          >
            GERANDO SUA SUPER COR
          </motion.button>
          :
          <motion.button
            className="flex p-2 m-auto justify-center items-center rounded-md font-semibold text-xl text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            style={{ backgroundColor: `#1D1E22` }}
            onClick={() => getColor()}
          >
            Pedir cor
            <PaperPlaneTilt className="ml-2" size={24} />
          </motion.button>
        }
      </div>
    </>
  )
}