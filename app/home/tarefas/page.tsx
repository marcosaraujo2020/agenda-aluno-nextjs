"use client";
import api from "@/service/api";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from "react";

function TaskPage() {
  const [tasks, setTasks] = useState([]); // Estado inicial vazio
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(""); // Estado para erros

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  useEffect(() => {
    const controller = new AbortController(); // Controla a requisição
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tarefas", { signal: controller.signal });
        setTasks(response.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Erro ao carregar as tarefas.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();

    return () => controller.abort();
  }, []);

  if (loading) return <p className="text-gray-500">Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  return (
    tasks.map((task) => (
      <Box key={task.id} sx={{ maxWidth: 345, p: 1 }}>
        <React.Fragment>
        <Card variant="outlined" sx={{ minWidth: 275, bgcolor: '#F9FAFB' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {task.titulo}
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'text.primary', fontSize: 18 }}>
              {task.description}
            </Typography>

            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 10 }}>
              Postado em: {task.creation_date}
            </Typography>

            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 10 }}>
              Data da devolutiva: {task.date_time}
            </Typography>
            
          </CardContent>

            <CardActions>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {task.status} <Switch {...label} size="small"/>
              </Typography>
              
              
            </CardActions>
          </Card>
        </React.Fragment>
      </Box>
    ))
  )
}

export default TaskPage;












/* "use client";

import api from '@/service/api';
import { useEffect, useState } from "react";

export default function TarefaPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/tarefas") 
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Erro ao carregar as tarefas.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left">Título</th>
              <th className="px-4 py-2 text-left">Descrição</th>
              <th className="px-4 py-2 text-left">Data da atividade</th>
              <th className="px-4 py-2 text-left">Data da Devolutiva</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{task.titulo}</td>
                <td className="px-4 py-2">{task.description}</td>
                <td className="px-4 py-2">{task.creation_date}</td>
                <td className="px-4 py-2">{task.date_time}</td>
                <td className="px-4 py-2">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

 */