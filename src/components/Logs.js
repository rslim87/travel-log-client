import React from 'react';
import { Link } from 'react-router-dom';

const Logs = ({log}) => {
	return (
	<p key={log.id}><Link to={`/logs/${log.id}`}>{log.city}</Link></p>
	);
}

export default Logs