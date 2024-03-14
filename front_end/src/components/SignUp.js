import styles from '../styles/SingUp.css';

export default function SingUp() {

    const handleSubmit = console.log('Formulário submetido')

    

    return (
        <div style={styles} className="container"> {/* Utilizando className em vez de class para atribuir classes no JSX */}
            <form onSubmit={handleSubmit}> {/* Adicionando uma função de handleSubmit para lidar com a submissão do formulário */}
                <h1>Cadastro</h1>
                {/* Campos do formulário */}
                <div className="input-block">
                    {/*<label htmlFor="nome">Nome:</label>*/} {/* Adicionando atributo htmlFor para associar rótulos aos inputs */}
                    <input type="text" id="nome" placeholder="Nome" /> {/* Adicionando o atributo id para associar o rótulo ao input */}
                </div>
                <div className="input-block">
                    {/* <label htmlFor="sobrenome">Sobrenome:</label> */}
                    <input type="text" id="sobrenome" placeholder="Último nome" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="sexo">Sexo:</label> */}
                    <select id="sexo" name="sexo"> {/* Adicionando o atributo id e um name ao select */}
                        <option value=""></option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <div className="input-block">
                    {/* <label htmlFor="cpf">CPF:</label> */}
                    <input type="number" id="cpf" placeholder="Insira o CPF" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="telefone">Telefone:</label> */}
                    <input type="tel" id="telefone" placeholder="Insira o Telefone" /> {/* Mudando o tipo de input para "tel" para indicar que é um número de telefone */}
                </div>
                <div className="input-block">
                    {/* <label htmlFor="nascimento">Nascimento:</label> */}
                    <input type="date" id="nascimento" placeholder="Insira a data" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="confirmarEmail">Confirmar e-mail:</label> */}
                    <input type="email" id="confirmarEmail" placeholder="Confirmar e-mail" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="senha">Senha:</label> */}
                    <input type="password" id="senha" placeholder="Senha" />
                </div>
                <div className="input-block">
                    {/* <label htmlFor="confirmarSenha">Confirmar senha:</label> */}
                    <input type="password" id="confirmarSenha" placeholder="Confirmar Senha" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"  className="checkbox" >Receber ofertas e novidades via e-mail.</label>
                </div>
                <div className='button'>
                    <button type="submit">Cadastrar-se</button>
                </div>
                <p>Ao clicar em "Cadastrar-se", você concorda com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>.</p>

            </form>
        </div>
    );
};
