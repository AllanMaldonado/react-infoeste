import { useEffect, useState } from "react"
import { CorpoDocente } from "../../entities/corpo-docente"
import { MainWrapper, ProfessorWrapper, Title, TitleWrapper } from "./corpo-docente-page.styles"
import { CardItem } from "./components/card-item/card-item"

export const CorpoDocentePage = ()=>{
    const [list, setList] = useState<CorpoDocente[]>([])

    useEffect(()=>{
        fetch("https://infoeste-2024-api.vercel.app", {method:"get"})
        .then((response)=>response.json())
        .then((value: {corpoDocente: CorpoDocente[]})=>{
            setList(value.corpoDocente)
        })
    },[])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars  
    const renderProfessorList = ()=>{ //ERRO NO ESLINT (SE TIRAR O COMMENT DE CIMA VOLTA)
        list    
            .sort((a,b)=>{
                if(a.nome > b.nome){
                    return 1;
                }
                if(a.nome < b.nome){
                    return -1;
                }
                return 0;
            })

            .map((item)=>{
                <CardItem
                    professor = {{
                        email: item.email,
                        foto: item.foto,
                        graduacao:item.graduacao,
                        nome: item.nome,
                        titulacao: item.titulacao,
                    }}
                />
            })
        return(
            <MainWrapper>
                <TitleWrapper>
                    <Title>{"CORPO DOCENTE"}</Title>
                </TitleWrapper>
                <ProfessorWrapper>{renderProfessorList()}</ProfessorWrapper>
            </MainWrapper>
         )
    }
}