import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  FC, memo, ReactElement, ReactNode, useMemo,
} from 'react';

import { colors, styles } from 'assets';
import Download from 'public/icons/components/Download';
import Star from 'public/icons/components/Star';
import { IIcon } from 'types/common.types';

interface IconPropsWrappedOptions {
  wrappedLeft?: boolean;
  color?: string;
  padding?: number;
}

interface IconPropsOptions {
  wrapped?: boolean;
  wrapOptions?: IconPropsWrappedOptions;
  rotated?: boolean;
  multiplicator?: number;
  color?: string;
}

interface IconProps {
  icon: IIcon;
  options?: IconPropsOptions;
}

const decorators = {
  wrapped: (content: ReactNode, options?: IconPropsOptions) => (
    <>
      <div className="wrapped">{content}</div>
      <style jsx>{`
        .wrapped {
          height: ${2 * (options?.multiplicator || 1)}em;
          width: ${2 * (options?.multiplicator || 1)}em;
          flex: 0 0 ${2 * (options?.multiplicator || 1)}em;
          display: grid;
          place-items: ${options?.wrapOptions?.wrappedLeft ? 'left' : 'center'};
          border-radius: 50%;
          background-color: ${options?.wrapOptions?.color || 'transparent'};
          padding: ${options?.wrapOptions?.padding || 0}px;
        }
      `}</style>
    </>
  ),
  rotated: (content: ReactNode, options?: IconPropsOptions) => (
    <>
      <div className="rotated-parent">
        <div className="rotated-child">{content}</div>
      </div>
      <style jsx>{`
        .rotated-parent {
          transform-origin: 50% 50%;
          height: ${2 * (options?.multiplicator || 1)}em;
          width: ${2 * (options?.multiplicator || 1)}em;
          flex: 0 0 ${2 * (options?.multiplicator || 1)}em;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(20deg);
          ${styles.br}
          background-color: ${options?.color || colors.grey['200']}
        }
        .rotated-child {
          transform-origin: 50% 50%;
          height: ${2 * (options?.multiplicator || 1)}em;
          width: ${2 * (options?.multiplicator || 1)}em;
          flex: 0 0 ${2 * (options?.multiplicator || 1)}em;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(-20deg);
        }
      `}</style>
    </>
  ),
};

const Icon: FC<IconProps> = ({ icon, options }) => {
  const content: ReactElement = useMemo(() => {
    switch (icon.source) {
      case 'fa':
        return (
          <span
            style={{
              fontSize: `${options?.multiplicator || 1}rem`,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              className="Icon"
              icon={icon.icon as IconDefinition}
            />
          </span>
        );
      case 'custom':
        return (
          <amp-img
            alt=""
            height={15 * (options?.multiplicator || 1)}
            width={15 * (options?.multiplicator || 1)}
            className="Icon"
            fallback=""
            src={`/icons/${icon.icon}.svg`}
          />
        );
      case 'component':
        switch (icon.icon) {
          case 'download':
            return (
              <Download color={options?.color || '#666'} />
            ) as ReactElement;
          case 'star':
            return (<Star color={options?.color || '#666'} />) as ReactElement;
          default:
            return null;
        }
      default:
        return null;
    }
  }, [options?.multiplicator, icon, options?.color]);

  const decorated = useMemo(() => {
    let initialContent = content;
    if (options?.rotated) {
      initialContent = decorators.rotated(initialContent, options);
    }
    if (options?.wrapped) {
      initialContent = decorators.wrapped(initialContent, options);
    }
    return initialContent;
  }, [content, options]);

  return decorated;
};

export default memo(Icon);
