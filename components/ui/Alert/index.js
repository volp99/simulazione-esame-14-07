const Alert = ({msg, className}) => {
	return (
		<div role="alert" className={className}>
			{msg}
		</div>
	)
}
export default Alert;