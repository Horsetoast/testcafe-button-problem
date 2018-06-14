import { ClientFunction, Selector } from 'testcafe';

fixture`Testcafe redirect bug`.page(
  `xxx`
);

test('Click a button in iframe and redirect', async t => {

  const iframe = Selector('#iframe');
  const button = Selector('#button');
  await t
    .switchToIframe(iframe)
    .click(button)
});