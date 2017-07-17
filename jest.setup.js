jest.mock('Linking', () => {
  // we need to mock both Linking.getInitialURL()
  // and Linking.getInitialURL().then()
  const mockGetInitialURL = jest.fn();
  mockGetInitialURL.mockReturnValueOnce({ then: jest.fn() });

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: mockGetInitialURL,
  };
});
