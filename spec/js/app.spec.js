describe('MyTest', function() {
    describe('find nav bar', () => {
    const myNewElement = `<nav class="navigation">
    <ul>
      <li>value 1</li>
      <li>value 2</li>
      <li>value 3</li>
      <li>value 4</li>
    </ul>
    </nav>`;

    let expected = navBarReveal();
    it('part of function should return nav bar', () => {
         expect(expected).toEqual('nav');
    });
});
});