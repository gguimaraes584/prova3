
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src="/assets/images/dev.svg" alt="" /> 
                </div>
                <div className="devSchool"> <span>Dev</span>Store</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/baixo.png" alt="" height="20px"  />
            </div>
            <div className="left-box-aluno">
                <div> Produtos </div>
            </div> 
        </Container>
    )
}