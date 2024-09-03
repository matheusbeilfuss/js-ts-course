import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch> {/* Switch é o componente que vai garantir que apenas uma rota seja exibida por vez */}
      <MyRoute exact path='/' component={Alunos} /> {/* Route é o componente que vai definir uma rota. Na "/" vai ser renderizado o login */}
      <MyRoute path='*' component={Page404} /> {/* Na rota que não for a "/" vai ser renderizado o Page404 */}
    </Switch>
  );
}
