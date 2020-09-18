import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {

    constructor() {
        super();
        this.state = {
            lista: [

            ]
        }

        this.onClickAtualizar = this.onClickAtualizar.bind(this);
    }

    onClickAtualizar(){
        fetch("http://localhost:4000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        lista: result
                    });
                },
                // Nota: É importante lidar com os erros aqui
                // em vez de um bloco catch() para não recebermos
                // exceções de erros dos componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        return (
            <div className="App">
                <h4>Listagem de pessoas</h4>

                <button onClick={this.onClickAtualizar}
                        type="button">
                    Atualizar Lista
                </button>


                <table className="table">
                    {
                        this.state.lista.map(function (p) {
                                return (
                                    <tr>
                                        <td> {p.id} </td>
                                        <td> {p.nome} </td>
                                        <td> {p.senha} </td>
                                        <td> {p.email} </td>
                                        <td> {p.telefone} </td>
                                    </tr>
                                );

                            }

                        )

                    }
                </table>
            </div>
        );
    }
}

export default App;
