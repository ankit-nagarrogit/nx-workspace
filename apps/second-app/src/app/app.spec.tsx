import App from './app';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(<App />);
    expect(
      getAllByText(new RegExp('Welcome @my-workspace/second-app', 'gi'))
        .length > 0
    ).toBeTruthy();
  });
});
