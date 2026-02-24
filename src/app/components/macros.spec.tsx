import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Macros } from './macros';
import React from 'react';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => Promise.resolve(),
    },
  }),
}));

describe('Macros Component', () => {
  it('should render the showLabel initially', () => {
    render(<Macros macros="100kcal" showLabel="Show" hideLabel="Hide" />);
    expect(screen.getByText('Show')).toBeDefined();
    expect(screen.queryByText('Hide')).toBeNull();
  });

  it('should toggle label and show macros when clicked', () => {
    render(<Macros macros="100kcal" showLabel="Show" hideLabel="Hide" />);
    
    const button = screen.getByText('Show');
    fireEvent.click(button);

    expect(screen.getByText('Hide')).toBeDefined();
    expect(screen.getByText('100kcal')).toBeDefined();
    
    fireEvent.click(screen.getByText('Hide'));
    expect(screen.getByText('Show')).toBeDefined();
  });
});
