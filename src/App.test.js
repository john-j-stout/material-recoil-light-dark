import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import App from './App';

test('renders Dark Mode Demo', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const demo = screen.getByText(/Light \/ Dark Mode Demo/i);
  expect(demo).toBeInTheDocument();
});
