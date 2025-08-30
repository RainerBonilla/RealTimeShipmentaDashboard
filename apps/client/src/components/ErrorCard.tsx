import './ErrorCard.css';

type ErrorCardProps = {
  errorMessage?: string;
};

const ErrorCard = ({
  errorMessage = 'Something happened on our end.',
}: ErrorCardProps) => {
  return (
    <div className='error-container'>
      <h1 className='error-title'>Oops!</h1>
      <br />
      <h2 className='error-message'>{errorMessage}</h2>
      <h3>Please try again later.</h3>
    </div>
  );
};

export default ErrorCard;
