/** Peer dep imports */
import React, { useState } from "react";
import { classNames } from "./utils";

export type TabProps = {
  /** Unique ID for each tab */
  id: string;
  /** Text label for each tab */
  label: string;
  /** The JSX content for each tab */
  children: React.ReactNode;
};

/**
 * Wrapper component for tab content.
 */
export function Tab({ children }: TabProps) {
  return children as React.ReactElement;
}

export type TabsProps = {
  /** The React children to map and render from */
  children: React.ReactElement<TabProps>[];
};

/**
 * Global UI for tabbed content.
 */
export function Tabs({ children }: TabsProps) {
  const [button, setButton] = useState<HTMLButtonElement | null>(null);
  const [active, setActive] = useState(children[0].props.id);

  return (
    <div className="tabs">
      <nav className="tabs__nav">
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
          const classes = {
            tabs__nav__item: true,
            active: active === child.props.id,
          };

          return (
            <button
              type="button"
              className={classNames(classes)}
              onClick={() => setActive(child.props.id)}
              ref={(element) => {
                if (active === child.props.id) {
                  setButton(element);
                }
              }}
            >
              {child.props.label}
            </button>
          );
        })}
        <div
          className="tabs__active"
          style={{
            transform: `translate3d(${button?.offsetLeft}px, 0, 0)`,
            width: `${button?.clientWidth}px`,
          }}
        ></div>
      </nav>
      <div className="tabs__tabs">
        {React.Children.map(children, (child: React.ReactElement<TabProps>) => {
          const classes = {
            tabs__tabs__item: true,
            active: active === child.props.id,
          };

          return (
            <div className={classNames(classes)}>
              <>{child.props.children}</>
            </div>
          );
        })}
      </div>
    </div>
  );
}
