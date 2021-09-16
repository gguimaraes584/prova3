import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";

import { Container, Conteudo } from "./styled";

import Api from "../../service/api";
import { useState, useEffect } from "react";
const api = new Api();

export default function Index() {
  const [produto, setProduto] = useState([]);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precopor, setPrecopor] = useState("");
  const [precode, setPrecode] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [estoque, setEstoque] = useState("");
  const [linkimg, setLinkimg] = useState("");
  const [descricao, setDescricao] = useState("");

  const [idAlterando, setIdAlterando] = useState(0);

  async function listar() {
    let r = await api.listar();
    setProduto(r);
  }

  async function inserir() {
    if (idAlterando == 0) {
      let r = await api.inserir(
        nome,
        categoria,
        avaliacao,
        precode,
        precopor,
        estoque,
        linkimg,
        descricao
      );

      if (r.erro) alert(r.erro);
      else alert("Produto Inserido Parçaaa");
    } else {
      let r = await api.alterar(
        idAlterando,
        nome,
        categoria,
        avaliacao,
        precode,
        precopor,
        estoque,
        linkimg,
        descricao
      );

      if (r.erro) alert(r.erro);
      else alert("Produto Alterado");
    }

    limparCampos();
    listar();
  }

  function limparCampos() {
    setNome("");
    setCategoria("");
    setAvaliacao("");
    setPrecode("");
    setPrecopor("");
    setEstoque("");
    setLinkimg("");
    setDescricao("");

    setIdAlterando(0);
  }

  async function remover(id) {
    let r = await api.remover(id);
    alert("Produto Removido Zé");
    listar();
  }

  async function editar(item) {
    setNome(item.nm_produto);
    setCategoria(item.ds_categoria);
    setAvaliacao(item.vl_avaliacao);
    setPrecopor(item.vl_preco_por);
    setPrecode(item.vl_preco_de);
    setEstoque(item.qtd_estoque);
    setLinkimg(item.link_img);
    setDescricao(item.ds_descricao);
    setIdAlterando(item.id_produto);
    alert("Produto editado lindo");
  }

  // função é categoria uma vez quando a tela abre
  useEffect(() => {
    listar();
  }, []);

    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student"> 
                            {idAlterando == 0
                            ? "Novo Produto"
                            : "Alterando Produto"}
                            </div>
                            
                        </div>

                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> 
                                    <input type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}/> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Categoria: </div>  
                                    <div class="input"> 
                                    <input type="text"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}/> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="number-student"> Avaliação: </div>  
                                    <div class="input"> <input type="text"
                                    value={avaliacao}
                                    onChange={(e) => setAvaliacao(e.target.value)}/> </div> 
                                </div>
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> Preço De: </div>  
                                    <div class="input">     
                                    <input type="text"
                                    value={precode}
                                    onChange={(e) => setPrecode(e.target.value)}/> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Preço POR: </div>  
                                    <div class="input"> 
                                    <input type="text"
                                    value={precopor}
                                    onChange={(e) => setPrecopor(e.target.value)} /> </div> 
                                </div>

                                <div class="agp-input">
                                    <div class="class-student"> Estoque: </div>  
                                    <div class="input"> <input type="text"
                                    value={estoque}
                                    onChange={(e) => setEstoque(e.target.value)} /> </div> 
                                </div>

                            </div>

                        </div>

                        <div class="input-new-student-2">
                        <div class="agp-input-2">
                                    <div class="number-student"> Link Imagem: </div>  
                                    <div class="input"> <input type="text"
                                    value={linkimg}
                                    onChange={(e) => setLinkimg(e.target.value)} /> </div> 
                                </div>

                                <div class="agp-textarea">
                                    <div class="number-student"> Descrição: </div>  
                                    <div class="input"> <textarea  type="text"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}></textarea> </div> 
                                </div>
                            
                        </div>
                        <div class="button-create">  <button onClick={inserir}>
              
                                {idAlterando == 0 ? "Cadastrar" : "Alterar"}</button> </div>

                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Produtos Cadastrados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> PRODUTO </th>
                                    <th> CATEGORIA </th>
                                    <th> PREÇO </th>
                                    <th> ESTOQUE </th>
                                  
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
              {produto.map((item, i) => (
                <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                  <td> {item.id_produto} </td>
                  <td title={item.nm_produto}>
                    <td>
                      {" "}
                      {item.nm_produto != null && item.nm_produto.length >= 25
                        ? item.nm_produto.substr(0, 25) + "..."
                        : item.nm_produto}
                    </td>
                  </td>
                  <td title={item.ds_categoria}>
                    <td> {item.ds_categoria} </td>
                  </td>
                  <td title={item.vl_preco_por}>
                    <td> {item.vl_preco_por} </td>
                  </td>
                  <td title={item.qtd_estoque}>
                    <td> {item.qtd_estoque} </td>
                  </td>
                  <td className="coluna-acao">
                    {" "}
                    <button onClick={() => editar(item)}>
                      {" "}
                      <img
                        src="./assets/images/editar.png"
                        alt=""
                        height="18px"
                      />{" "}
                    </button>{" "}
                  </td>
                  <td className="coluna-acao">
                    {" "}
                    <button onClick={() => remover(item.id_produto)}>
                      {" "}
                      <img
                        src="./assets/images/lixo.png"
                        alt=""
                        height="18px"
                      />{" "}
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}