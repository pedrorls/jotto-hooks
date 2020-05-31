import moxios from "moxios";
import { getSecretWord } from "./hookActions";

describe("moxios test", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should call getSecretWord callback on axios", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    const mockFn = jest.fn();

    await getSecretWord(mockFn);

    expect(mockFn).toHaveBeenCalledWith(secretWord);
  });
});
