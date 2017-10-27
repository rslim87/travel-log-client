import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react'

const Logs = ({log}) => {
	return (
	<div>
	<p key={log.id}><Link to={`/logs/${log.id}`}>{log.city}</Link></p>
	</div>
	);
}

export default Logs