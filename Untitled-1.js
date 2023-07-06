// Tests that fetchData function fetches data from the API successfully
it('test_fetchData_success', async () => {
    const response = await fetchData(20);
    expect(response).toBeDefined();
    expect(response).not.toBeNull();
});

// Tests that the fetchData function finds a user with the given ID
it('test_finds_user_with_given_id', async () => {
    const id = 30;
    const user = await fetchData(id);
    expect(user.dob.age).toBe(id);
});

// Tests that the function logs the safe user object to the console
it('test_logs_safe_user_object', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const id = 30;
    await fetchData(id);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
});

