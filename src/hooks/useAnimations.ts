'use client';

import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    const headerEl = document.querySelector('header');
    const videoEl = document.querySelector('.blackhole-box video') as HTMLVideoElement | null;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (headerEl) {
        if (currentScroll > 100) {
          headerEl.classList.add('scrolled');
        } else {
          headerEl.classList.remove('scrolled');
        }
      }

      if (videoEl) {
        videoEl.style.transform = `translate(-50%, -50%) scale(${1 + currentScroll * 0.0003})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export function useSmoothScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const smoothScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', smoothScroll));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);
}

export function useIntersectionAnimations() {
  useEffect(() => {
    const animatedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            target.style.animation = 'fadeInUp 0.8s ease forwards';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document
      .querySelectorAll<HTMLElement>('.about-card, .project-card, .skills-category, .contact-method')
      .forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.animationDelay = `${index * 0.1}s`;
        animatedObserver.observe(el);
      });

    const skillItems = document.querySelectorAll<HTMLElement>('.skill-item');
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'scale(1)';
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8)';
      item.style.transition = 'all 0.4s ease';
      item.style.transitionDelay = `${index * 0.05}s`;
      skillObserver.observe(item);
    });

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.animation = 'slideInLeft 0.8s ease forwards';
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll<HTMLElement>('.section-title').forEach((title) => titleObserver.observe(title));

    return () => {
      animatedObserver.disconnect();
      skillObserver.disconnect();
      titleObserver.disconnect();
    };
  }, []);
}

export function useCardTilt() {
  useEffect(() => {
    const tiltCards = document.querySelectorAll<HTMLElement>('.about-card, .project-card');

    const handleMouseMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = '';
    };

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}

export function useButtonEffects() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>('.btn');

    const onButtonEnter = function (this: HTMLElement) {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    };

    const onButtonLeave = function (this: HTMLElement) {
      this.style.transform = '';
    };

    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', onButtonEnter);
      btn.addEventListener('mouseleave', onButtonLeave);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', onButtonEnter);
        btn.removeEventListener('mouseleave', onButtonLeave);
      });
    };
  }, []);
}

export function useRippleEffect() {
  useEffect(() => {
    const contactMethods = document.querySelectorAll<HTMLElement>('.contact-method');

    const rippleHandler = function (this: HTMLElement, event: MouseEvent) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.5);
        width: 20px;
        height: 20px;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: rippleEffect 0.6s ease-out;
      `;

      const rect = this.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    contactMethods.forEach((method) => method.addEventListener('click', rippleHandler));

    return () => {
      contactMethods.forEach((method) => method.removeEventListener('click', rippleHandler));
    };
  }, []);
}
