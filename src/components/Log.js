import React from 'react';
import { Grid, Button } from 'semantic-ui-react'

const Log = ({log}) => {
	return (
		<div key={log.id}>		
		<h2>{log.city},  {log.country} </h2>
		<p></p>
		<p>Solo travel: {String(log.solo_travel)} </p>
		<p>Month: {log.month} </p> 
		<p>Year: {log.year} </p>
		
		</div>

	);
}

export default Log