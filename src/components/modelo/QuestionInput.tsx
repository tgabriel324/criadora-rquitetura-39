
import { useState } from "react";

interface QuestionInputProps {
  question: string;
  placeholder?: string;
  defaultValue?: string;
  multiline?: boolean;
  rows?: number;
  label?: string;
  onChange?: (value: string) => void;
}

export const QuestionInput = ({ 
  question, 
  placeholder, 
  defaultValue, 
  multiline = false, 
  rows = 5,
  label,
  onChange
}: QuestionInputProps) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="space-y-2">
      {label && <div className="text-lg font-semibold text-primary mb-1">{label}</div>}
      <div className="flex items-start gap-2">
        <div className="min-w-4 mt-1">•</div>
        <div className="flex-1">
          <div className="text-sm text-gray-700 mb-1">{question}</div>
          {multiline ? (
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              placeholder={placeholder || question}
              value={value}
              onChange={handleChange}
              rows={rows}
            />
          ) : (
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
              placeholder={placeholder || question}
              value={value}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
