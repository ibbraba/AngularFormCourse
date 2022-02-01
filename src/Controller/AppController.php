<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/app", name="app")
     */
    public function index(Response $response): Response
    {
        $content = $response->getContent();
        dd($content);


        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }
}
