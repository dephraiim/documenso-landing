/* eslint-disable @next/next/no-img-element */
import { Logo } from "@/components/Logo";
import { Star } from "@/components/Star";
import { Github, PackageOpen, Puzzle, Search, ShieldCheckIcon, Slack, Twitter } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <>
      <header role="banner" className="ui-section-header">
        <div className="ui-layout-container">
          <div className="ui-section-header__layout ui-layout-flex">
            <a href="#" role="link" aria-label="#">
              <Logo className="text-slate-900 h-6" />
            </a>
            <a
              href="#"
              role="link"
              aria-label="#"
              className="ui-component-button ui-component-button-small ui-component-button-primary"
            >
              <Star className="inline h-4" /> <span>Star on Github</span>
            </a>
          </div>
        </div>
      </header>
      <main role="main">
        <section className="ui-section-hero">
          <div className="ui-layout-container">
            <div className="ui-layout-column-6 ui-layout-column-center">
              <h1 className="font-bold">The Open Source DocuSign Alternative.</h1>
              <p className="ui-text-intro">
                Our goal at Documenso is to establish ourselves as the most reliable document
                signing solution globally.
              </p>

              <div className="ui-component-cta ui-layout-flex">
                <a
                  href="#waitlist"
                  role="link"
                  aria-label="#waitlist"
                  className="ui-component-button ui-component-button-normal ui-component-button-primary"
                >
                  Join the waitlist
                </a>
                <p className="ui-text-note">
                  <small>A ready-to-use version will be availible soon.</small>
                </p>
              </div>
            </div>

            <img src="/demo.png" loading="lazy" alt="#" className="ui-section-hero--image" />
          </div>
        </section>

        <section>
          <div className=" overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A better way to sign documents.
                  </h2>
                </div>
                <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                  <div>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand text-white">
                        <PackageOpen className="h-6 w-6 flex-shrink-0" />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                        Free and Open Source
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Documenso is completely free and open source, providing transparency,
                      community-driven development, and customization options for users who value
                      open source software.
                    </dd>
                  </div>

                  <div>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand text-white">
                        <ShieldCheckIcon className="h-6 w-6 flex-shrink-0" />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                        Secure and Private
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Documenso prioritizes data security and privacy, with end-to-end encryption
                      and no data stored on our servers, ensuring that your signed documents are
                      kept safe and confidential.
                    </dd>
                  </div>

                  <div>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand text-white">
                        <Puzzle className="h-6 w-6 flex-shrink-0" />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                        Flexible Integration
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Our open source document signing application offers easy integration with
                      popular document management systems and APIs, making it seamless to
                      incorporate into your existing workflow or software.
                    </dd>
                  </div>

                  <div>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand text-white">
                        <Search />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                        Audit Trail and Document History
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Documenso maintains a detailed audit trail and document history, allowing you
                      to track and verify all changes, signatures, and actions taken on a document,
                      ensuring accountability and compliance.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="ui-section-close">
          <div className="ui-layout-container">
            <div className="ui-layout-column-7 ui-layout-column-center">
              <h2 className="font-bold">Documenso Cloud will be here soon!</h2>
              <p className="ui-text-intro">
                Love Documenso but don&apos;t want to self-host?
                <br />A ready-to-use version will be available soon.
              </p>
              <div className="ui-component-cta ui-layout-flex">
                <form action="#" className="ui-component-form ui-layout-grid ui-layout-column-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="ui-component-input ui-component-input-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="ui-component-button ui-component-button-medium ui-component-button-primary"
                  >
                    Join Waitlist
                  </button>
                </form>
                <p className="ui-text-note">
                  <small>Sign up to be notified when we launch.</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10">
          <div className="my-20">
            <h2 className="font-bold text-center">Frequently Asked Questions</h2>
          </div>
          <section className="ui-section-faq">
            <div className="ui-layout-container">
              <div className="ui-section-faq__layout ui-layout-grid ui-layout-grid-2">
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    Why should I prefer Documenso over DocuSign or some other signing tool?
                  </h4>
                  <p className="ui-section-faq--answer">
                    Documenso is a community effort to create an open and vibrant ecosystem around a
                    tool, everybody is free to use and adapt. By beeing truly open we want to create
                    trusted infrastructure for the future of the internet.
                  </p>
                </div>
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    I don&apos;t want to self-host, will there a be ready-to-use version?{" "}
                  </h4>
                  <p className="ui-section-faq--answer">
                    Documenso will be addiontionally offered as a subscription based service you can
                    just sign up for after launch at Documenso.com.
                  </p>
                </div>
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    When will Documenso be launched?
                  </h4>
                  <p className="ui-section-faq--answer">
                    The launch is planned for 2023. Just sign up and we will keep you posted. You
                    can also follow us on Twitter at @Documenso to keep up to date.
                  </p>
                </div>
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    I like the idea and want to contribute
                  </h4>
                  <p className="ui-section-faq--answer">
                    Awesome. You can sign up to stay up to date with the newest developments and
                    chances to contribute.
                  </p>
                </div>
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    Can I use Documenso commercially?
                  </h4>
                  <p className="ui-section-faq--answer">
                    Yes! Documenso will be offered under GNU AGPL V3 or a similar open source
                    license. This means you can use it for free and even modify it to your needs, as
                    long as you publish your changes under the same license.
                  </p>
                </div>
                <div>
                  <h4 className="ui-component-list--item ui-section-faq--question font-bold text-xl">
                    Who can contribute?
                  </h4>
                  <p className="ui-section-faq--answer">
                    Since we are still in th early phases we need all kinds of people from user to
                    tester and developers. If you want to be a part of our journey let us know, help
                    is always appreciated.
                  </p>
                </div>
              </div>
              <p className="ui-section-faq--note">
                Still have questions? Contact us at{" "}
                <a href="#" role="link" aria-label="#" className="font-semibold">
                  hi@documenso.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <div className="max-w-2xl mx-auto text-center my-20">
        <Logo className="inline-flex h-8 opacity-80 hover:opacity-100 duration-500" />
        <p className="text-slate-700 my-5">Made with ☔ in Hamburg.</p>
      </div>

      <footer role="contentinfo" className="ui-section-footer">
        <div className="ui-layout-container">
          <div className="ui-section-footer__layout ui-layout-flex">
            <p className="ui-section-footer--copyright ui-text-note">
              <small>&copy; Venturo UG | HRB 165716. All rights reserved.</small>
            </p>
            <nav
              role="navigation"
              className="ui-section-footer--nav ui-section-footer--menu ui-layout-flex"
            >
              <a href="#" role="link" aria-label="#" className="ui-text-note">
                <small>Features</small>
              </a>
              <a href="#" role="link" aria-label="#" className="ui-text-note">
                <small>Waitlist</small>
              </a>
              <a href="#" role="link" aria-label="#" className="ui-text-note">
                <small>Terms</small>
              </a>
            </nav>
            <nav role="navigation" className="ui-section-footer--nav  ui-layout-flex">
              <a href="#" role="link" aria-label="#">
                <Twitter className="h-4 opacity-60" />
              </a>
              <a href="#" role="link" aria-label="#">
                <Github className="h-4 opacity-60" />
              </a>
              <a href="#" role="link" aria-label="#">
                <Slack className="h-4 opacity-60" />
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
