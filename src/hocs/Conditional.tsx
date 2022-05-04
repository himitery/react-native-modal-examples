import React from 'react';

interface ConditionalProps {
  children: React.ReactNode;
  condition: boolean;
}

const Conditional: React.FC<ConditionalProps> = ({ children, condition }) => {
  return <>{condition && children}</>;
};

export default Conditional;
