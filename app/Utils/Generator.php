<?php

namespace App\Utils;

class Generator
{
    public static function projectCode($length = 10): string
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $result = '';

        for ($i = 0; $i < $length; $i++) {
            $result .= $characters[random_int(0, $charactersLength - 1)];
        }

        return $result;
    }

    public static function randomColorHex(): string
    {
        return sprintf('#%06X', mt_rand(0, 0xFFFFFF));
    }
}