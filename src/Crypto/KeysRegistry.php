<?php

declare(strict_types=1);

namespace Windy\Guardian\Crypto;

use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Container\Container;
use Illuminate\Validation\ValidationException;
use Throwable;
use Windy\Guardian\Exceptions\InvalidKeyConfigurationException;

/**
 * Holds the keys declared in the JWT configuration.
 *
 * @mixin Key
 */
class KeysRegistry extends Registry
{
    /** @var KeyFactory $factory The JWK factory. */
    private $factory;

    /**
     * @param Container $container The application container instance.
     *
     * @throws BindingResolutionException
     */
    public function __construct(Container $container)
    {
        parent::__construct($container, 'key');

        $this->factory = $container->make(KeyFactory::class);
    }

    /**
     * @param mixed[] $config The key configuration.
     *
     * @return Key The newly created key.
     *
     * @throws ValidationException
     */
    public function create(array $config): Key
    {
        return $this->factory->createFromConfig($config);
    }

    /**
     * @param string $name The key configuration name.
     *
     * @return InvalidKeyConfigurationException The invalid key configuration exception.
     */
    public function unknown(string $name): Throwable
    {
        return new InvalidKeyConfigurationException($name);
    }
}
