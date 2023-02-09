import { getHeadlines, searchNews } from "./api";

test("getHeadlines returns data", async () => {
  const data = await getHeadlines();
  expect(data).toBeDefined();
});

test("searchNews returns data", async () => {
  const data = await searchNews("test");
  expect(data).toBeDefined();
});

test("getHeadlines returns data with articles", async () => {
  const data = await getHeadlines();
  expect(data.articles).toBeDefined();
});
