import logoImg from '../../assets/logo-no-background.png';
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransitionModal: () => void;
}

export function Header({onOpenNewTransitionModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="MTS Money" width='200px'/>
                <button type="button" onClick={onOpenNewTransitionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}