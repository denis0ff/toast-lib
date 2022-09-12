import React, { ReactNode } from 'react';

export default class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { error: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong. Please, try to reload the page.</p>;
    }

    return this.props.children;
  }
}
