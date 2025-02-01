"use client";
import { useRef, useState } from "react";

type inputFileProps = {
  name: string;
  label: string;
  classname: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputFiles: React.FC<inputFileProps> = ({ name, classname, label }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Pega o primeiro arquivo selecionado
    if (file) {
      setFileName(file.name); // Atualiza o nome do arquivo no estado
    }
  };

  return (
    <div className={`grid gap-2 ${classname}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div
        className={`w-full min-h-8 border flex justify-center items-center border-sencondary100 rounded-md cursor-pointer ${classname}`}
        onClick={handleClick}
      >
        <h1 className="text-sencondary100">
          {fileName ? fileName : "Upload do documento"}
        </h1>
        <input
          type="file"
          id={name}
          hidden
          ref={inputRef}
          accept="image/*,application/pdf"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default InputFiles;
