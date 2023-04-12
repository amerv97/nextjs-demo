// our-domain.com

import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great-framework">
            NextJS is a great Framework
          </Link>
        </li>
        <li>Something else..</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
