test('object assignment', () => {
    const data = { one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('object not null', () => {
    expect(null).not.toBe(undefined);
});

test('truthiness', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect({}).toBeDefined();
    expect(true).toBeTruthy();
    expect(0).toBeFalsy();
});

test('numbers', () => {
    const number = 2;
    expect(number).toBeGreaterThan(1);
    expect(number).toBeGreaterThanOrEqual(2);
    expect(number).toBeLessThan(3);
    expect(number).toBeLessThanOrEqual(2);

    expect(number).toBe(2);
    expect(number).toEqual(2);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

test('regular expressions characters', () => {
    expect('abc').toMatch(/a/); //maching a single letter from the given word
    expect('cd').toMatch(/[abc]d/); //give a list of options to occur in the square bracket 
    expect('a').toMatch(/ab?/);
    expect('ac').toMatch(/ab?/); //? denotes optional for the character before that
    expect('shelton').toMatch(/shelto+n/); //one or more
});

test('regular expressions integer', () => {
    expect('s1b').toMatch(/s\db/); //denote a single integer
    expect('123').toMatch(/\d+/); //denote n consecutive integers
});

test('regular expressions whitespace characters', () => {
    expect('sa').not.toMatch(/\s/);
    expect('s a').toMatch(/\s/);
});