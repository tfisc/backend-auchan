INSERT INTO TYPE_UTILISATEUR (id_type, libelle) VALUES (1, 'ADMINISTRATEUR');
INSERT INTO TYPE_UTILISATEUR (id_type, libelle) VALUES (2, 'PARENT');
INSERT INTO TYPE_UTILISATEUR (id_type, libelle) VALUES (3, 'ETUDIANT');

INSERT INTO public.cursus(id, nom) VALUES (1, 'DUT');
INSERT INTO public.cursus(id, nom) VALUES (2, 'BTS');
INSERT INTO public.cursus(id, nom) VALUES (3, 'BACHELOR');
INSERT INTO public.cursus(id, nom) VALUES (4, 'LICENCE');
INSERT INTO public.cursus(id, nom) VALUES (5, 'MASTER');


INSERT INTO ETAT_COURS (id_etat, libelle) VALUES (1, 'En attente');
INSERT INTO ETAT_COURS (id_etat, libelle) VALUES (2, 'Validé');
INSERT INTO ETAT_COURS (id_etat, libelle) VALUES (3, 'Refusé');
INSERT INTO ETAT_COURS (id_etat, libelle) VALUES (4, 'En cours');
INSERT INTO ETAT_COURS (id_etat, libelle) VALUES (5, 'Terminé');

INSERT INTO public.matiere (id, libelle) VALUES (1, 'Mathematiques');
INSERT INTO public.matiere (id, libelle) VALUES (2, 'Anglais');
INSERT INTO public.matiere (id, libelle) VALUES (3, 'Francais');
INSERT INTO public.matiere (id, libelle) VALUES (4, 'Histoire');
INSERT INTO public.matiere (id, libelle) VALUES (5, 'SVT');
INSERT INTO public.matiere (id, libelle) VALUES (6, 'Physique chimie');

INSERT INTO public.academie (id, libelle) VALUES (1, 'Academie de Montpellier');
INSERT INTO public.academie (id, libelle) VALUES (2, 'Academie de Paris');
INSERT INTO public.academie (id, libelle) VALUES (3, 'Academie de Rennes');
INSERT INTO public.academie (id, libelle) VALUES (4, 'Academie de Lyon');


INSERT INTO public.etablissement (id, libelle, type, statut, "academieId") VALUES (1, 'IUT de Montpellier', 'IUT', 'public', (SELECT id from academie WHERE libelle='Academie de Montpellier'));
INSERT INTO public.etablissement (id, libelle, type, statut, "academieId") VALUES (2, 'EPSI', 'IUT', 'privé',  (SELECT id from academie WHERE libelle='Academie de Montpellier'));
INSERT INTO public.etablissement (id, libelle, type, statut, "academieId") VALUES (3, 'Université Paris Diderot', 'Université', 'privé',  (SELECT id from academie WHERE libelle='Academie de Paris'));
INSERT INTO public.etablissement (id, libelle, type, statut, "academieId") VALUES (4, 'IUT de Rennes', 'IUT', 'public',  (SELECT id from academie WHERE libelle='Academie de Rennes'));
INSERT INTO public.etablissement (id, libelle, type, statut, "academieId") VALUES (5, 'Université Jean Moulin', 'Université', 'public',  (SELECT id from academie WHERE libelle='Academie de Lyon'));

