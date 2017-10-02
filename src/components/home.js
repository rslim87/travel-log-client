import React from 'react';
import { Grid } from 'semantic-ui-react'

const Home = () =>
  <Grid centered columns={4} textAlign='center' padded='vertically'>
    <Grid.Column>

				<h1>Travel Log</h1>
				<p>Wish list of places you want to travel</p>
				Please <a href='/signup'>sign up</a> or <a href='/login'>log in</a> to use

    </Grid.Column>
  </Grid>

export default Home