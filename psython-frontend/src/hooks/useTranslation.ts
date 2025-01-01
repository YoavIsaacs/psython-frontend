import { useState } from "react";

interface TranslationResult {
    succeess: boolean;
    translatedCpde?: string;
    errors?: string[];
}

export const useTranslation = () => {
    const [isTranslating, setIsTranslating] = useState(false);
    const [result, setResult] = useState<TranslationResult | null>(null);

    const translateCode = async (code: string, config: any) => {
        setIsTranslating(true);
        try {
            const response = await fetch("/api/translaet", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ code, config })
            });
            
            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult({
                succeess: false,
                errors: ["Translation failed."]
            });
        } finally {
            setIsTranslating(false);
        }
    };

    return {
        isTranslating,
        result,
        translateCode
    };
};
