describe('Homepage (static via Nginx)', () => {
  it('loads successfully', () => {
    cy.request('/').its('status').should('eq', 200);
  });

  it('shows the correct title and heading', () => {
    cy.visit('/');
    cy.title().should('include', 'Docker + Nginx'); // จาก <title> ใน index.html
    cy.get('.card h1').should('contain', 'สวัสดี');
  });

  it('has a main badge and CTA link', () => {
    cy.visit('/');
    cy.get('.badge').should('contain', 'my-web');
    cy.get('a.btn')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener');
  });

  it('serves static assets from the correct root', () => {
    // ตรวจว่าเสิร์ฟไฟล์ index.html จาก root ได้
    cy.visit('/');
    cy.get('html').should('exist');
  });
});
