const Badge = ({text, className}) => {
	return (
		<span className={className} role="alert">{text}</span>
	)
}
export default Badge;