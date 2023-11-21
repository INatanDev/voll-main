import { useEffect, useState } from "react";

export default function useFetch<t>({url} : {url: string}){
    const [dados, setDados] = useState<t | null>(null); 
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`).then(
            resposta => resposta.json()).then(dados => setDados(dados)).catch((erro => setErro(erro)))
    }, [url])

    return {dados, erro}
}