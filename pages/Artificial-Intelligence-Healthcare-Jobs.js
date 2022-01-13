import React from "react";
import Layout from "../components/Layout";
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Panel,
  ToggleRefinement,
  Pagination,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import Head from "next/head";
import JobList from "../components/JobList";
import { connectHits } from "react-instantsearch-dom";
import { useRef } from "react";
import Link from "next/link";
import { withInstantSearch } from "next-instantsearch";

// To avoid getting bullet point when hits are listed.
const Hits = ({ hits }) => (
  <ol>
    {hits.map((hit) => {
      const title = hit.jobTitle.toLowerCase().replace(/[(), /]/g, "-");
      const company = hit.companyName.toLowerCase().replace(/[(), /]/g, "-");
      return (
        <Link
          key={hit.applyUrl}
          href={`/job-id/${hit.refID}-${title}-${company}`}
        >
          <a className="joblistclick">
            <JobList job={hit} />
          </a>
        </Link>
      );
    })}
  </ol>
);

const CustomHits = connectHits(Hits);

const searchClient = algoliasearch(
  "VLJVAJ9ZX8",
  "0fddb2ff13078cbddcd2cec602fedc76"
);

function openFilters() {
  document.body.classList.add("filtering");
  window.scrollTo(0, 0);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("click", onClick);
}

function closeFilters() {
  document.body.classList.remove("filtering");
  containerRef.current.scrollIntoView();
  window.removeEventListener("keyup", onKeyUp);
  window.removeEventListener("click", onClick);
}

function onKeyUp(event) {
  if (event.key !== "Escape") {
    return;
  }

  closeFilters();
}

function onClick(event) {
  if (event.target !== headerRef.current) {
    return;
  }

  closeFilters();
}

function categoryRename(label) {
  if (label === "legalhrfin") {
    label = "Legal / HR / Finance";
  } else if (label === "customersupportops") {
    label = "Customer Success / Operations";
  } else {
    label = label[0].toUpperCase() + label.slice(1);
  }

  return label;
}

const Page = () => (
  <>
    <Head>
      <title>Artificial Intelligence in Healthcare Jobs</title>
    </Head>
    <Layout>
      <header className="header">
        <h1>AI/Artificial Intelligence Healthcare Jobs</h1>
        <SearchBox
          searchAsYouType={false}
          translations={{
            placeholder: "Location, Job Title, Company...",
          }}
          submit={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
                transform="translate(1 1)"
              >
                <circle cx="7.11" cy="7.11" r="7.11" />
                <path d="M16 16l-3.87-3.87" />
              </g>
            </svg>
          }
        />
      </header>
      <main className="container">
        <div className="bodyWrapper">
          <div className="leftPanel">
            <div className="filterHeader">
              <h2>Filters</h2>
              <div className="clear-filters">
                <ClearRefinements
                  translations={{
                    reset: (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                        >
                          <g fill="none" fillRule="evenodd" opacity=".4">
                            <path d="M0 0h11v11H0z" />
                            <path
                              fill="#000"
                              fillRule="nonzero"
                              d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                            />
                          </g>
                        </svg>
                        Clear filters
                      </>
                    ),
                  }}
                />
              </div>
            </div>
            <Panel header="Remote Only">
              <ToggleRefinement
                attribute="remote"
                label="Display only remote jobs"
                value={true}
              />
            </Panel>
            <Panel header="Category">
              <RefinementList
                attribute="category"
                transformItems={(items) =>
                  items.map((item) => ({
                    ...item,
                    label: categoryRename(item.label),
                  }))
                }
              />
            </Panel>
            <Panel header="Company">
              <RefinementList
                attribute="companyName"
                searchable={true}
                translations={{
                  placeholder: "Search for company…",
                }}
              />
            </Panel>
            <footer className="container-filters-footer" data-layout="mobile">
              <div className="container-filters-footer-button-wrapper">
                <button
                  className="button button-primary"
                  onClick={closeFilters}
                >
                  See Results
                </button>
              </div>
            </footer>
          </div>

          <div className="hitsWrapper">
            <CustomHits />
            <footer className="container-footer">
              <Pagination
                padding={2}
                showFirst={false}
                showLast={false}
                translations={{
                  previous: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.143"
                      >
                        <path d="M9 5H1M5 9L1 5l4-4" />
                      </g>
                    </svg>
                  ),
                  next: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.143"
                      >
                        <path d="M1 5h8M5 9l4-4-4-4" />
                      </g>
                    </svg>
                  ),
                }}
              />
            </footer>
          </div>
        </div>
      </main>
      <aside data-layout="mobile">
        <button
          className="filters-button"
          data-action="open-overlay"
          onClick={openFilters}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path
              d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
              stroke="#fff"
              strokeWidth="1.29"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filters
        </button>
      </aside>
    </Layout>
  </>
);

Page.getInitialProps = async () => ({
  indexName: "jobs",
  // You may want to set some default searchState.
  // This will be merged on to state from the url.

  searchState: {
    query: "Ai",
  },
});

export default withInstantSearch({
  searchClient,
})(Page);
