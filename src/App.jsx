//import { Fragment } from "react";
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';
import { useEffect, useState } from 'react';

const App = () => {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	//lo carga cuando el componente esta listo
	useEffect(() => {
		const obtenerLS = () => {
			const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
			setPacientes(pacientesLS);
		};
		obtenerLS();
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminarPaciente = id => {
		const updatePacientes = pacientes.filter(paciente => paciente.id !== id);
		setPacientes(updatePacientes);
	};

	return (
		<div className='container mx-auto mt-20'>
			<Header />
			<div className='mt-12 md:flex'>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
};

export default App;
