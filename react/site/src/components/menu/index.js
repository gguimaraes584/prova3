
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66665 1.66666H22.6666V28.3333H4.66665C3.78259 28.3333 2.93474 27.9821 2.30962 27.357C1.6845 26.7319 1.33331 25.884 1.33331 25V4.99999C1.33331 4.11593 1.6845 3.26809 2.30962 2.64297C2.93474 2.01785 3.78259 1.66666 4.66665 1.66666V1.66666Z" stroke="#DB21BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                </div>
                <div className="devSchool"> <span>Dev</span>School</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/baixo.png" alt="" height="20px"  />
            </div>
            <div className="left-box-aluno">
                <div> Alunos </div>
            </div> 
        </Container>
    )
}