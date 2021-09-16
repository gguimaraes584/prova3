import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar(){
        let r = await api.get('/produto');
        return r.data;
    }

    async inserir(nome, categoria, avaliacao, precode, precopor, estoque, linkimg, descricao){
        let r = await api.post('/produto', { nome, categoria, avaliacao, precode, precopor, estoque, linkimg, descricao } );
        return r.data;
    }

    async alterar(id, nome, categoria, avaliacao, precode, precopor, estoque, linkimg, descricao) {
       let r = await api.put('/produto/' + id, {nome, categoria, avaliacao, precode, precopor, estoque, linkimg, descricao});
       return r.data;
    }

    async remover(id){
        let r = await api.delete('/produto/' + id );
        return r.data; 
    }
}

